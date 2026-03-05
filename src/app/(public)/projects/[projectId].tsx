interface ProjectDetailPageProps {
  params: {
    projectId: string;
  };
}

export default function ProjectDetailPage({ params }: ProjectDetailPageProps) {
  const { projectId } = params;

  return (
    <div className="min-h-screen bg-transparent text-white">
      <div className="mx-auto max-w-4xl pb-14 pt-8">
        <h1 className="text-center text-3xl font-bold text-teal-300 sm:text-4xl">
          Project Details: {projectId}
        </h1>

        <div className="mt-8 overflow-hidden rounded-3xl border border-white/10 bg-slate-950/70 p-6 text-sm text-slate-200 shadow-xl backdrop-blur sm:p-8">
          <p>
            This dynamic project detail page is ready to display more
            information about the selected project. You can extend this section
            with screenshots, tech stack, responsibilities, and links.
          </p>
        </div>
      </div>
    </div>
  );
}
