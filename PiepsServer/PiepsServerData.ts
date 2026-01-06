export interface PiepsContentTypes {
    html: string;
    css: string;
    js: string;
    ico: string;
    png: string;
    jpg: string;
    jpeg: string;
    svg: string;
    json: string;
    txt: string;
    bin: string;
    webp: string;
    ttf: string;
    pdf: string;
}

const PiepsContentTypeObj = {
    html: "text/html; charset=utf-8",
    css: "text/css",
    js: "application/javascript",
    ico: "image/x-icon",
    png: "image/png",
    jpg: "image/jpeg",
    jpeg: "image/jpeg",
    svg: "image/svg+xml",
    json: "application/json",
    txt: "text/plain; charset=utf-8",
    bin: "application/octet-stream",
    webp: "image/webp",
    ttf: "font/ttf",
    pdf: "application/pdf"
};

const PiepsContentTypeList: Array<string> = [
    "html", "css", "js", "ico", "png", "jpg", "jpeg", "svg", "json", "txt", "bin", "webp", "ttf", "pdf"
]

export {
    PiepsContentTypeObj,
    PiepsContentTypeList,
}