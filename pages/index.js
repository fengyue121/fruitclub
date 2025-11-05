export default function Home() {
  return (
    <main style={{
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Fira Sans", "Droid Sans", "Helvetica Neue", Arial, sans-serif',
      margin: '40px'
    }}>
      <h1 style={{ fontSize: 20 }}>Fruitclub 静态文件</h1>
      <p>以下直链可在部署至 Vercel 后通过外网访问：</p>
      <ul style={{ lineHeight: 1.9 }}>
        <li><a href="/app-ads.txt">/app-ads.txt</a></li>
        <li><a href="/iosclient.txt">/iosclient.txt</a></li>
        <li><a href="/config.json">/config.json</a></li>
      </ul>
      <p>示例：<code>https://your-project.vercel.app/app-ads.txt</code></p>
    </main>
  );
}