const PairMatchDetails = ({ symbol, description }) => (
    <div className="pair-match">
      <div className="discovered">Discovered</div>
      <div className="display pair-details">
        <div>{symbol}</div>
        <div>{description}</div>
      </div>
    </div>
  );
  
  export default PairMatchDetails;
  