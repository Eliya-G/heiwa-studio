import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { ArticleParser } from "./articleParsing"

export function ArticleDetailPage() {
  const { slug } = useParams();
  const [article, setArticle] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchArticle = async () => {
      try {
        const response = await fetch(`https://heiwa-studio.eliyagop.com/api/articles/`);
        const data = await response.json();

        const matchedArticle = data.find(
          (a) => a.article_title.replaceAll(/[: ']/g, "-").replace(/-+/g, "-").toLowerCase() === slug
        );

        if (!matchedArticle) {
          setError("Article not found.");
        } else {
          setArticle(matchedArticle);
        }
      } catch (err) {
        setError("Failed to load article.");
      }
    };

    fetchArticle();
  }, [slug]);

  if (error) return <h1>{error}</h1>;
  if (!article) return <h1 id="top-spacer-supporter" className="abt-title">Loading...</h1>;

  return (
    <div className="article-detail">
      <h1 id="top-spacer-supporter" className="abt-title">{article.article_title}</h1>
      <div className="content-body lightBackground">
      <ArticleParser text={article.article_text_body} />
      </div>
    </div>
  );
}
