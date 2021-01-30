import React, { useRef } from 'react';

import "./Article.scss";
import { NavHashLink } from 'react-router-hash-link';
import ScrollToTop from "../../components/ScrollToTop";
import {useMediaQuery} from "react-responsive";
import Section from "../../components/Section";

import ConfiguredMarkdown from "../../components/ConfiguredMarkdown";
import {useResize} from "../../hooks/useResize";


function Article(props) {

    const divReference = useRef(null);
    const maxWidth = useResize(divReference);

    const isS = useMediaQuery({query: '(max-width: 640px)'})
    const widthClass = isS ? "uk-width" : "uk-height-viewport";

    return <React.Fragment>
        <ScrollToTop/>
        <div id='sidenav-article' uk-sticky className={`uk-position-fixed uk-active ${widthClass}`}>
            <ul className="uk-nav uk-nav-default tm-nav uk-nav-parent-icon">
                <li className="">
                    <NavHashLink to="/#News">
                        <span>ZPĚT</span>
                    </NavHashLink>
                </li>
            </ul>
        </div>
        <Section id="Article" parallax={false} label={props.article.label} feel={"bright"}>
            <div className="uk-container uk-container-large uk-padding-remove-top" ref={divReference}>
                <p className="uk-text-center">Autor: {props.article.author}</p>
                <p className="uk-text-center">Datum: {props.article.date}</p>
                <hr/>
                <ConfiguredMarkdown url={props.article.url} maxWidth={maxWidth} />
            </div>
        </Section>
    </React.Fragment>
}

export default Article;