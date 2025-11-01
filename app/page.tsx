export default function Page() {
  return (
    <main style={{ padding: "0", margin: 0 }}>
      <iframe
        src="/index.html"
        title="Spectra Media Landing"
        style={{
          border: "none",
          width: "100%",
          height: "100vh",
        }}
      ></iframe>
    </main>
  );
}
