import webpack from 'webpack';
import {buildWebpackConfig} from "./Config/build/buildWebpackConfig";
import {BuildPaths} from "./Config/build/types/config";
import path from "path";

const paths: BuildPaths = {
    entry: path.resolve(__dirname, 'src', 'index.ts'),
    build: path.resolve(__dirname, 'build'),
    html: path.resolve(__dirname, 'public', 'index.html')
}

const mode = 'development';
const isDev = mode === 'development';

const config: webpack.Configuration = buildWebpackConfig({
    mode: 'development',
    paths,
    isDev
});

export default config;

