export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    // 与 vercel.json 行为一致：根路径返回歌单 api/Jay.json
    if (url.pathname === "/") {
      return env.ASSETS.fetch(
        new Request(new URL("/api/Jay.json", request.url), request)
      );
    }

    // 其余路径（/song/*、/lrc/*、/pic/*、/api/*）由静态资源直接响应
    return env.ASSETS.fetch(request);
  },
};
