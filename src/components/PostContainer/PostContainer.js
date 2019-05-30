import React from "react";
import DummyData from './dummy-data.js';

function PostContainer() {
    return (
      <div>
        <div className="post-list">
          {DummyData.map(DummyDataFromMap => (
            <DummyData post={DummyDataFromMap} key={DummyDataFromMap.name} />
          ))}
        </div>
      </div>
    );
  }
export default PostContainer;