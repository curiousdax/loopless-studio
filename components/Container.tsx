// Consistent max-width container used across all sections
export default function Container({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`max-w-6xl mx-auto w-full px-5 md:px-8 lg:px-12 ${className}`}>
      {children}
    </div>
  );
}
