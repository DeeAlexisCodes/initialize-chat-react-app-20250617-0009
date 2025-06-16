import React, { useState, useEffect } from 'react';
import PageHeader from '../components/createAgentPage/PageHeader';
import AgentBriefForm from '../components/createAgentPage/AgentBriefForm';
import InputTextArea from '../components/createAgentPage/InputTextArea';
import AddParagraphButton from '../components/createAgentPage/AddParagraphButton';
import SubmitButton from '../components/createAgentPage/SubmitButton';
import AgentShowcase from '../components/createAgentPage/AgentShowcase';
import ShowcaseCard from '../components/createAgentPage/ShowcaseCard';
import * as api from '../logic/createAgentPage/createAgentPageLogic';

const CreateAgentPage = () => {
  const [inputParagraphs, setInputParagraphs] = useState([""]);
  const [isSubmitEnabled, setIsSubmitEnabled] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState(null);

  useEffect(() => {
    // Enable submit if any paragraph has content
    const hasContent = inputParagraphs.some(paragraph => paragraph.trim() !== "");
    setIsSubmitEnabled(hasContent);
  }, [inputParagraphs]);

  const handleParagraphChange = (index, value) => {
    const updatedParagraphs = [...inputParagraphs];
    updatedParagraphs[index] = value;
    setInputParagraphs(updatedParagraphs);
  };

  const handleAddParagraph = () => {
    setInputParagraphs([...inputParagraphs, ""]);
  };

  const handleSubmit = async () => {
    setIsSubmitting(true);
    setSubmitError(null);
    try {
      // Assuming api.submitAgentBrief exists in createAgentPageLogic
      await api.submitAgentBrief(inputParagraphs);
      // Optionally reset form or show success message
      setInputParagraphs([""]);
      alert("Agent brief submitted successfully!");
    } catch (error) {
      console.error("Failed to submit agent brief:", error);
      setSubmitError("Failed to submit agent brief. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center py-4">
      <PageHeader />

      <main className="flex flex-col lg:flex-row gap-8 w-full max-w-7xl px-4 py-8">
        <section className="flex-1">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Create Your AI Agent Brief</h2>
          <AgentBriefForm
            inputParagraphs={inputParagraphs}
            onParagraphChange={handleParagraphChange}
            onAddParagraph={handleAddParagraph}
            onSubmit={handleSubmit}
            isSubmitEnabled={isSubmitEnabled && !isSubmitting} // Disable if submitting
          >
            {/* These are conceptually children of AgentBriefForm as per plan, 
                but usually passed as children props or rendered directly within AgentBriefForm.
                If AgentBriefForm is intended to render them internally based on props,
                they wouldn't be direct children here. For clarity, passing all necessary
                props to AgentBriefForm which then distributes them to its internal
                InputTextArea, AddParagraphButton, and SubmitButton instances. */}
          </AgentBriefForm>
          {isSubmitting && <p className="text-blue-600 mt-4">Submitting...</p>}
          {submitError && <p className="text-red-600 mt-4">{submitError}</p>}
        </section>

        <aside className="lg:w-1/3">
          <AgentShowcase />
        </aside>
      </main>
    </div>
  );
};

export default CreateAgentPage;