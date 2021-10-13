import {GetStaticPaths, GetStaticProps} from "next";
import {BLOG_DIR} from "src/service/dir";
import {fetchBlog, fetchClassifications} from "src/service/blogs";
import path from "path";

const Blog = () => {
    return <div>Blog</div>;
};

var dirs: string[] = [];
export const getStaticProps: GetStaticProps = async (context) => {
    const clsUrl = context.params?.classification as string;
    const blogUrl = context.params?.blog as string;
    console.log("dirs", dirs);
    return {
        props: {}
    };
    // let article: Article = null;
    // let previousBlog = null;
    // let nextBlog = null;
    // let htmlContent = "";
    // try {
    //     article = await getArticleByUrlPath(blogPath);
    //     htmlContent = converter.makeHtml(article.content) as string;
    //     const adjoins = await getAdjoinArticle(article.id);
    //     if (adjoins) {
    //         previousBlog = adjoins.preArticle;
    //         nextBlog = adjoins.nextArticle;
    //     }
    // } catch (error) {
    //     console.log(error);
    // }

    // return {
    //     props: {article, previousBlog, nextBlog, htmlContent},
    //     revalidate: 120, // 每隔一分钟更新一次，使静态页面也会更新
    // }
};

export const getStaticPaths: GetStaticPaths = async () => {
    const classifications = fetchClassifications();

    const paths: {params: any}[] = [];

    for (let i = 0; i < classifications.length; i++) {
        const cls = classifications[i];
        for (let j = 0; j < cls.files.length; j++) {
            const blog = await fetchBlog(path.resolve(BLOG_DIR, cls.name, cls.files[j].name));
            dirs.push(path.resolve(BLOG_DIR, cls.name, cls.files[j].name));
            paths.push({
                params: {
                    classification: cls.urlPath,
                    blog: blog.url
                }
            })
        }
    }
    
    return {
        fallback: false,
        paths: paths
    };
};

export default Blog;
