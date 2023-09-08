export default function PromptCard(props) {
  return (
    <div className={"card mx-auto prompt mt-3 text-bg-" + props.class} style={{ maxWidth: '50%' }}>
      <div className="card-body">
        {props.body}
      </div>
    </div>
  );
}
