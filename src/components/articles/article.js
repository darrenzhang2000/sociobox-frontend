import axios from 'axios'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { storeArticles } from '../../redux/redux'
import "./article.css"

const Article = props => {
    const dispatch = useDispatch()
    const articles = useSelector(state => state.articles)

    const getNews = (socialIssue) => {
        try {
            axios.get(`https://newsapi.org/v2/everything?q=${socialIssue}&apiKey=6be856520d3b469dbbe720fffc62b91a`)
                .then(res => {
                    console.log(res.data.articles)
                    dispatch(storeArticles(res.data.articles))
                })
        } catch (err) {
            console.log(err)
        }
    }

    useEffect(
        () => {
            getNews("Plastic Pollution")
        }
    ,[])


    return <div className="article-page">
        {articles.length > 0 ? <div className="article-info">
            <h1>{articles[0].title}</h1>
            <p>By {articles[0].author}</p>
            <p>{articles[0].publishedAt.slice(0, 10)}</p>

            <a href={articles[0].url}>  Source: {articles[0].url}</a>
            <img className="img1" src={articles[0].urlToImage}></img> </div> : null
        }

        <p>
            We know that plastic waste is a big problem for the planet - our oceans are becoming clogged with the stuff and we're rapidly running out of landfill sites.
            Only 9% is recycled. Burning it contributes to greenhouse gas emissions and global warming. So could plant-based alternatives and better recycling provide an answer? We have grown to rely on plastic - it's hardwearing and versatile and much of our modern economy depends on it. And for many current uses there are simply no commercially viable biodegradable alternatives.
        </p>

        <p>
            The humble single-use drinking straw is a case in point. Primaplast, a leading plastic straw manufacturer, says "greener" alternatives cost a hundred times more to make. </p>

        <p>
            Are we stuck with plastic straws? Takeaway coffee cups are another example. In the UK alone we throw away around 2.5 billion of them every year,
            many of us thinking that they are recyclable when they're not, due to a layer of polyethylene that makes the cup waterproof.
        </p>

        <p>
            One company trying to change this is Biome Bioplastics, which has developed a fully compostable and recyclable cup using natural materials such as potato starch, corn starch, and cellulose, the main constituent of plant cell walls. Most traditional plastics are made from oil.
        </p>

        <h3 className="upcoming">Upcoming Articles</h3>

        {articles.slice(1).map(article => <div className="next-articles">
            <img src={article.urlToImage}></img>
            <a href={article.url}><h1 className="mini-h1">{article.title}</h1></a>
        </div>)}
    </div>
}

export default Article