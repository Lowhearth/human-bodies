import './OpenseaBtn.css';

type Props = {
  openseaUrl: string;
  bodyName: string;
};

export const OpenseaBtn: React.FC<Props> = ({ openseaUrl, bodyName }) => {
  return (
    <div className="opensea-cta-container">
      <p className="cta-text">
        {`Do you want to make a bid for ${bodyName} or give it a like?`}
      </p>
      <button
        onClick={() => window.open(openseaUrl, '_blank')}
        className="button-opensea"
      >
        → Check it at OpenSea
      </button>
    </div>
  );
};
