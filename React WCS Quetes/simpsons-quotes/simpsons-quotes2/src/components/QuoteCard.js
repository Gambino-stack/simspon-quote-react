import React from 'react';
import './quote-card.css';

function QuoteCard({quote}) {
    return(
        <figure className="QuoteCard">
    <img
      src={quote.image}
      alt="Nelson Muntz" />
    <figcaption>
      <blockquote>
       {quote.quote}
      </blockquote>
      <cite>{quote.character}</cite>
    </figcaption>
    </figure>
    );
}

export default QuoteCard;