export const PageLoader = () => {
  return (
    <div className="fixed inset-0 bg-white flex items-center justify-center z-50">
      <div className="text-center">
        <div className="relative w-3 h-3 mx-auto mb-6">
          <div className="absolute inset-0 rounded-full bg-blue-600"></div>
          <div className="absolute inset-0 rounded-full bg-blue-600 animate-ping"></div>
          <div className="absolute -inset-2 rounded-full bg-blue-500 opacity-40 animate-ping" style={{ animationDuration: '1.5s' }}></div>
        </div>
        <p className="text-sm font-medium text-gray-500 tracking-wider">Please wait...</p>
      </div>
    </div>
  );
};
