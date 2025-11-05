# FruitClub Configuration Service

这是一个部署在 Vercel 上的配置与静态文件服务，为 FruitClub 应用提供：
- `/api/config`：返回 JSON 配置数据
- `/app-ads.txt`：提供 app-ads.txt 下载地址（部署域名根路径）
- `/`：简单首页，展示上述链接并支持 API 测试

## 部署到 Vercel

1. 注册并登录 Vercel 账号
2. 安装 Vercel CLI（可选）：
   ```bash
   npm install -g vercel
   ```
3. 在项目根目录运行：
   ```bash
   vercel
   ```
4. 按照提示完成部署设置，部署完成后将获得域名，例如：
   - `https://fruitclub-config.vercel.app/`
   - `https://fruitclub-config.vercel.app/api/config`
   - `https://fruitclub-config.vercel.app/app-ads.txt`

## 本地开发

无需构建步骤，使用 Vercel 开发服务器：
```bash
npm run dev
# 或
npx vercel dev
```
打开浏览器访问 `http://localhost:3000` 进行验证。

## 配置说明

- 修改 `api/config.js` 中的 `config` 对象即可更新线上配置（重新部署后生效）。
- `public/app-ads.txt` 为静态文件，更新内容并重新部署即可。
- 首页位于 `public/index.html`，用于快速查看与测试。

## 注意事项

- 如果你在应用商店需要校验 app-ads.txt，请确保部署域名与应用信息一致，并在商店或广告平台处填入准确的下载地址。
- 生产环境请根据实际广告平台填写 `app-ads.txt` 内容（例如 AdMob、Facebook 等），不要使用示例占位符。


npx vercel link --project fruitclub-three --yes 
npx vercel --prod --yes 

npx vercel link --project fruitclub-three-kappa --yes 

npx vercel --prod --yes 
