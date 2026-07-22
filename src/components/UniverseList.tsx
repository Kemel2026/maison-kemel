    "use client";

type UniverseListProps = {
    number: string;
    title: string;
    description: string;
    items: string[];
    image: string;
    isOpen: boolean;
    onOpen: () => void;
};

export default function UniverseList({
    number,
    title,
    description,
    items,
    image,
    isOpen,
    onOpen,
}: UniverseListProps) {
    return (
            <section
    onMouseEnter={onOpen}
    className={`
        border-b border-stone-200
        py-12
        transition-all
        duration-[1900ms]
ease-[cubic-bezier(0.22,1,0.36,1)]
        ease-out
        ${isOpen ? "bg-[#F8F6F2]" : ""}
    `}
>
            <button
    onClick={onOpen}
    className="w-full flex items-center justify-between text-left group"
>
    <div className="flex items-center gap-8">

        <span className="w-10 text-sm tracking-[0.25em] text-stone-400">
            {number}
        </span>

        <h2
    className={`
        font-display
        text-xl
        md:text-[2.5rem]
        leading-none
        tracking-[-0.03em]
        transition-all
        duration-[1900ms]
        ease-[cubic-bezier(0.22,1,0.36,1)]
        ${isOpen ? "text-[#2D2D2D]" : "text-stone-700"}
    `}
>
            {title}
        </h2>

    </div>

    <span
        className={`
            text-3xl
            text-stone-400
            transition-all
            duration-[1900ms]
ease-[cubic-bezier(0.22,1,0.36,1)]0
            ${isOpen ? "rotate-45" : ""}
        `}
    >
        +
    </span>
</button>

            <div
    className={`
        overflow-hidden
        transition-all
        duration-[1900ms]
ease-[cubic-bezier(0.22,1,0.36,1)]
        ease-out
        ${
            isOpen
                ? "max-h-[700px] opacity-100 mt-10"
                : "max-h-0 opacity-0"
        }
    `}
>
    <div className="grid md:grid-cols-[1.1fr_0.9fr] gap-16 pt-2">

        <div>
            <p className="max-w-lg text-[16px] leading-8 text-stone-600">
                {description}
            </p>
        </div>

        <ul className="space-y-4">

            {items.map((item) => (
                <li
                    key={item}
                    className="flex items-center gap-4"
                >
                    <span className="h-px w-6 bg-stone-300" />

                    <span className="text-[15px] font-light tracking-[0.01em] text-stone-700">
                        {item}
                    </span>
                </li>
            ))}

        </ul>

    </div>
</div>
        </section>
    );
}