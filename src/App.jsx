import React from 'react';
import Editor from './Editor';

const App = () => {
  return (
    <div className='main'>
      {/* Sidebar */}
      <aside className='sidebar'>
        <div className='sidebardiv'>
          Editor
        </div>
      </aside>

      {/* Section containing the code editor */}
      <section className='editor'>
        {/* Render the 'Editor' component, which is responsible for code input. */}
        <Editor />
      </section>
    </div>
  );
}

export default App;
