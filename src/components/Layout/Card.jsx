export default function Card(props) {
  return (
    <div className="card form-card text-bg-secondary bg-transparent mx-auto mt-4" style={{ maxWidth: '50%' }}>
      <div className="card-header card-title"><h5>{props.title}</h5></div>
      <div className="card-body">
        {props.children}
      </div>
    </div>
  );
}
