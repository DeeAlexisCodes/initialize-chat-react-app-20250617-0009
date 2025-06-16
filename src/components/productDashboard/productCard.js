import React from 'react';

const ProductIcon = ({ iconSVG, colorClass }) => (
    <div className={`p-2 rounded-full flex items-center justify-center bg-${colorClass}-100 text-${colorClass}-600`}>
        {iconSVG}
    </div>
);

const StatusBadge = ({ status }) => {
    let badgeClasses = '';
    let dotClasses = '';
    let statusText = '';

    switch (status) {
        case 'in-progress':
            badgeClasses = 'bg-blue-100 text-blue-700';
            dotClasses = 'bg-blue-700';
            statusText = 'In Progress';
            break;
        case 'completed':
            badgeClasses = 'bg-green-100 text-green-700';
            dotClasses = 'bg-green-700';
            statusText = 'Completed';
            break;
        case 'on-hold':
            badgeClasses = 'bg-yellow-100 text-yellow-700';
            dotClasses = 'bg-yellow-700';
            statusText = 'On Hold';
            break;
        case 'error':
            badgeClasses = 'bg-red-100 text-red-700';
            dotClasses = 'bg-red-700';
            statusText = 'Error';
            break;
        case 'draft':
            badgeClasses = 'bg-gray-100 text-gray-700';
            dotClasses = 'bg-gray-700';
            statusText = 'Draft';
            break;
        default:
            badgeClasses = 'bg-gray-100 text-gray-700';
            dotClasses = 'bg-gray-700';
            statusText = status.charAt(0).toUpperCase() + status.slice(1).replace(/-/g, ' ');
    }

    return (
        <span className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-xs font-medium ${badgeClasses}`}>
            <div className={`w-1.5 h-1.5 rounded-full ${dotClasses}`}></div>
            {statusText}
        </span>
    );
};

const CircularProgressBar = ({ percentage, colorClass }) => {
    const radius = 16;
    const circumference = 2 * Math.PI * radius;
    const offset = circumference - (percentage / 100) * circumference;

    return (
        <div className="relative w-10 h-10">
            <svg className="absolute top-0 left-0" viewBox="0 0 40 40" width="40" height="40">
                <circle
                    cx="20"
                    cy="20"
                    r={radius}
                    className="stroke-gray-200 stroke-[4px] fill-none"
                />
                <circle
                    cx="20"
                    cy="20"
                    r={radius}
                    className={`stroke-${colorClass}-500 stroke-[4px] fill-none transition-all duration-500`}
                    style={{
                        strokeDasharray: circumference,
                        strokeDashoffset: offset,
                        transformOrigin: 'center',
                        transform: 'rotate(-90deg)',
                    }}
                />
            </svg>
        </div>
    );
};

const CardActionButtons = ({ onOpenProduct, onNewVersion, productId }) => (
    <div className="flex gap-3 mt-auto pt-4 border-t border-gray-200">
        <button
            onClick={() => onOpenProduct(productId)}
            className="px-4 py-2 rounded-md font-medium transition-colors duration-200 bg-blue-600 text-white hover:bg-blue-700"
        >
            Open
        </button>
        <button
            onClick={() => onNewVersion(productId)}
            className="px-4 py-2 rounded-md font-medium transition-colors duration-200 bg-gray-100 text-gray-700 hover:bg-gray-200"
        >
            New Version
        </button>
    </div>
);

const ProductCard = ({ product, colorClass, onOpenProduct, onNewVersion }) => {
    const defaultIconSVG = (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="18" height="18">
            <path d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2"/>
            <path d="M7 2v20"/>
            <path d="M21 15V2a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3z"/>
        </svg>
    );

    const {
        id,
        title = 'Untitled Product',
        version = 'N/A',
        status = 'draft',
        description = 'No description available.',
        percentageComplete = 0,
        lastUpdated = 'Never',
        iconSVG = defaultIconSVG
    } = product || {};

    return (
        <div className={`flex flex-col p-6 rounded-lg shadow-md bg-white border border-solid border-${colorClass}-500`}>
            <div className="flex items-center gap-4 mb-4">
                <ProductIcon iconSVG={iconSVG} colorClass={colorClass} />
                <div className="flex flex-col gap-1">
                    <div className="flex items-center gap-2">
                        <h3 className="text-xl font-semibold text-gray-800">{title}</h3>
                        <span className="text-sm text-gray-500">{version}</span>
                    </div>
                    <StatusBadge status={status} />
                </div>
            </div>
            <p className="text-gray-600 mb-4">{description}</p>
            <div className="flex items-center gap-4 mb-6">
                <CircularProgressBar percentage={percentageComplete} colorClass={colorClass} />
                <div className="flex flex-col">
                    <p className="text-sm font-semibold text-gray-800">{percentageComplete}% Complete</p>
                    <p className="text-xs text-gray-500">{lastUpdated}</p>
                </div>
            </div>
            <CardActionButtons
                onOpenProduct={onOpenProduct}
                onNewVersion={onNewVersion}
                productId={id}
            />
        </div>
    );
};

export default ProductCard;