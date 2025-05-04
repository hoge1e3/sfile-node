import { FileSystemFactory } from "@hoge1e3/sfile";
import * as fs from "node:fs";
import * as path from "node:path";
const FS=new FileSystemFactory({fs, path, Buffer});
export default FS;
export const get=FS.get.bind(FS);