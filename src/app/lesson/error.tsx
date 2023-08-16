'use client';

function ErrorWrapper({ error }: { error: Error }) {
  return (
    <h1>
      Opps!
      <br />
      {error.message}
    </h1>
  );
}

export default ErrorWrapper;
