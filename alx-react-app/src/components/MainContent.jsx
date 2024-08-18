{/* <main>
  <p>I love to visit New York, Paris, and Tokyo.</p>
</main> */}



function MainContent() {
    return (
        <main style={{ padding: '20px', backgroundColor: '#f4f4f4' }}>
            <h2 style={{ color: '#333' }}>{props.title}</h2>
            <p>I love to visit New York, Paris, and Tokyo.</p>
        </main>
    );
}

export default MainContent;