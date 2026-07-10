interface LatencySparklineProps {
    data: number[];
}

export function LatencySparkline({ data }: LatencySparklineProps) {
    if (data.length === 0) return null;

    const values = [0, ...data];
    const max = Math.max(...values, 1);
    const points = values
        .map(
            (value, index) =>
                `${(index / (values.length - 1)) * 100},${24 - (value / max) * 24}`,
        )
        .join(" ");

    return (
        <svg
            aria-hidden="true"
            className="absolute inset-0 h-full w-full text-gray-400"
            preserveAspectRatio="none"
            viewBox="0 0 100 24"
        >
            <polygon
                points={`${points} 100,24 0,24`}
                fill="currentColor"
                opacity="0.12"
            />
            <polyline
                points={points}
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                vectorEffect="non-scaling-stroke"
            />
        </svg>
    );
}
