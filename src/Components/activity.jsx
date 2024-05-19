import React from 'react';

const UserActivity = () => {
  // Dummy data
  const activities = [
    {
      id: 1,
      username: "tusharrr.31",
      postDate: "23-Feb-2024",
      content: `I went from 298 followers to 17,845 on LinkedIn in 7 weeks with a single tool.
                usually this takes months.
                This AI does all the job for me.
                Just press a few buttons and let your audience grow CRAZY.
                Try it out -> https://app.feather-ai.io/simple?from=landing_simple&twclid=2-6pgj91xopf1hg9dc7ia7151`,
      views: 23356,
      likes: 85,
      shares: 10,
    },
    {
      id: 2,
      username: "tusharrr.31",
      postDate: "29-Feb-2024",
      content: `I went from 298 followers to 17,845 on LinkedIn in 7 weeks with a single tool.
                usually this takes months.
                This AI does all the job for me.
                Just press a few buttons and let your audience grow CRAZY.
                Try it out -> https://app.feather-ai.io/simple?from=landing_simple&twclid=2-6pgj91xopf1hg9dc7ia7151`,
      views: 84,
      likes: 14,
      shares: 4,
    }
  ];

  return (
    <div className="p-4 mt-[2rem]">
      <h2 className="text-xl font-bold mb-4 text-white ">User Activity</h2>
      {activities.map(activity => (
        <div key={activity.id} className="border rounded-lg p-4 mb-4 shadow-md">
          <div className="flex items-center mb-2">
            <img
              src={`https://avatars.dicebear.com/api/initials/${activity.username}.svg`}
              alt="User avatar"
              className="w-10 h-10 rounded-full mr-3"
            />
            <div>
              <div className="font-semibold">{activity.username}</div>
              <div className="text-sm text-gray-500">Published: {activity.postDate}</div>
            </div>
          </div>
          <p className="mb-2">{activity.content}</p>
          <div className="flex justify-between text-sm text-white">
            <div>Views: {activity.views}</div>
            <div>Likes: {activity.likes}</div>
            <div>Shares: {activity.shares}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default UserActivity;
