import "./articlesPage.css";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export function ArticlesPage() {
  const [articles, setArticles] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const response = await fetch("https://heiwa-studio.eliyagop.com/api/articles");
        const data = await response.json();
        setArticles(data);
      } catch (err) {
        setError("Failed to load articles.");
      }
    };

    fetchArticles();
  }, []);

  if (error) return <h1>{error}</h1>;

  return (
    <>
      <h1 id="top-spacer-supporter" className="abt-title">Articles</h1>
      <div className="content-body">
        <div className="article-container">
          {articles.map((article, i) => {
            const slug = article.article_title.replaceAll(/[: ']/g, "-").replace(/-+/g, "-").toLowerCase();
            return (
              <Link key={article.articles_id || i} to={`/articles/${slug}`}>
                <div className="article-link-border">
                  <h1 className="react-links">{article.article_title}</h1>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </>
  );
}
