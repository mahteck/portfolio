import { useRouter } from 'next/router';

const ProjectDetail = () => {
  const router = useRouter();
  const { projectId } = router.query; // This will be the dynamic part of the URL

  return (
    <div className="min-h-screen bg-gray-50">
      <h1 className="text-4xl font-bold text-center my-12">
        {projectId ? `Project Details: ${projectId}` : "Loading..."}
      </h1>

      {/* Here, you can add more content specific to the project */}
      <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden p-8">
        <p>Details about the project {projectId} will go here.</p>
      </div>
    </div>
  );
};

export default ProjectDetail;
