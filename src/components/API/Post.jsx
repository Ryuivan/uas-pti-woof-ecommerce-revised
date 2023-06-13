import React from "react";
import { InstagramEmbed } from 'react-social-media-embed';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Post.css'

function Post(){
    return(
        <div>
            <div>
                <h1 className="text-center my-4">Testimonials</h1>
            </div>
            <div style={{ display: 'flex', justifyContent: 'center' }} className="my-4 text-center">
              <div className="insta-testi">
                <InstagramEmbed url="https://www.instagram.com/p/Csy51C9yMJB/?utm_source=ig_web_copy_link&igshid=MmJiY2I4NDBkZg==" />
                </div>
            </div>
        </div>
    );
};

export default Post;