import React from 'react'
import Title from './title.js'
import Description from './description.js'
import AuthorBio from './authorBio.js'

const Container = function() {

    return(
        <div>
        <div class = "boxed">
        <Title />
        <AuthorBio />
        <div class = "subboxed">
        <Description />
        </div>
        </div>
        </div>
    );
}

export default Container;