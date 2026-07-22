import { patterns } from './data/roadmap';

const difficultyClass = (difficulty: string) => difficulty.toLowerCase();

export default function App() {
  return (
    <div className="syllabus">
      <header className="syllabus-header">
        <a className="brand" href="#top">
          <span>◎</span>
          <b>DSA Tree</b>
        </a>
      </header>

      <main>
        <section className="syllabus-hero">
          <h1>
            Interview-ready <em>DSA roadmap</em>
          </h1>
          <p>
            A compact, premium-style syllabus covering the most common interview patterns
            from arrays and strings to trees, graphs, heaps, DP, and design.
          </p>
        </section>

        <section className="table-card">
          <div className="table-caption">
            <h2>Pattern syllabus</h2>
            <span>67 focused patterns • curated LeetCode practice</span>
          </div>

          <div className="table-scroll">
            <table>
              <thead>
                <tr>
                  <th className="row-number">#</th>
                  <th>Topic</th>
                  <th>Pattern</th>
                  <th>Sub-pattern</th>
                  <th>Trigger</th>
                  <th>Questions</th>
                </tr>
              </thead>
              <tbody>
                {patterns.map((row, index) => (
                  <tr key={`${row.topic}-${row.pattern}-${row.subPattern}-${index}`}>
                    <td>{index + 1}</td>
                    <td>{row.topic}</td>
                    <td>{row.pattern}</td>
                    <td>{row.subPattern}</td>
                    <td className="trigger-cell">{row.trigger}</td>
                    <td>
                      <div className="question-links">
                        {row.questions.map((question) => (
                          <a key={question.url} href={question.url} target="_blank" rel="noreferrer">
                            <span className={difficultyClass(question.difficulty)}>{question.difficulty}</span>
                            {question.title}
                          </a>
                        ))}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </main>
    </div>
  );
}
