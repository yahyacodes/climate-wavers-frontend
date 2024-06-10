const UserProfile = () => {
  return (
    <div className="flex gap-4 p-2">
      <img className="w-10 h-10 rounded-full" src="../../pic1.png" alt="" />
      <div className="font-medium">
        <div className="text-gray-900 text-lg">Jese Leos</div>
        <div className="flex gap-4">
          <div className="text-xs text-gray-500">@titisimon21. 6h ago</div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
