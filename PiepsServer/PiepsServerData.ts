export const PiepsContentTypeObj = {
    //--------------------------------------->>>>WEB_CORES<<<<-------------------------------------->
    html: "text/html; charset=utf-8",
    css: "text/css; charset=utf-8",
    js: "application/javascript; charset=utf-8",
    mjs: "application/javascript; charset=utf-8",
    json: "application/json; charset=utf-8",
    wasm: "application/wasm",
    map: "application/json",

    //------------------------------------->>>>IMAGE_FORMATS<<<<------------------------------------>
    ico: "image/x-icon",
    png: "image/png",
    jpg: "image/jpeg",
    jpeg: "image/jpeg",
    svg: "image/svg+xml",
    webp: "image/webp",
    avif: "image/avif",
    gif: "image/gif",
    bmp: "image/bmp",
    tiff: "image/tiff",

    //------------------------------------->>>>AUDIO_FORMATS<<<<------------------------------------>
    mp3: "audio/mpeg",
    wav: "audio/wav",
    ogg: "audio/ogg",
    m4a: "audio/mp4",
    flac: "audio/flac",
    aac: "audio/aac",

    //------------------------------------->>>>VIDEO_FORMATS<<<<------------------------------------>
    mp4: "video/mp4",
    webm: "video/webm",
    ogv: "video/ogg",
    mov: "video/quicktime",
    avi: "video/x-msvideo",

    //-------------------------------------->>>>FONT_FORMATS<<<<------------------------------------>
    woff: "font/woff",
    woff2: "font/woff2",
    ttf: "font/ttf",
    otf: "font/otf",
    eot: "application/vnd.ms-fontobject",

    //------------------------------------>>>>DOCUMENT_FORMATS<<<<---------------------------------->
    txt: "text/plain; charset=utf-8",
    pdf: "application/pdf",
    xml: "application/xml",
    md: "text/markdown; charset=utf-8",
    csv: "text/csv",
    doc: "application/msword",
    docx: "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    xls: "application/vnd.ms-excel",
    xlsx: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
    ppt: "application/vnd.ms-powerpoint",
    pptx: "application/vnd.openxmlformats-officedocument.presentationml.presentation",

    //------------------------------------->>>>OTHER_FORMATS<<<<------------------------------------>
    zip: "application/zip",
    rar: "application/vnd.rar",
    "7z": "application/x-7z-compressed",
    tar: "application/x-tar",
    gz: "application/gzip",
    bin: "application/octet-stream",
    exe: "application/octet-stream",
} as const;

export type PiepsContentTypes = typeof PiepsContentTypeObj;
export const PiepsContentTypeList = Object.keys(PiepsContentTypeObj) as Array<keyof PiepsContentTypes>;