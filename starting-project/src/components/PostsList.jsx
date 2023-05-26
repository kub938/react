import { useState } from 'react'

import Post from './Post'
import NewPost from './NewPost'
import styles from './PostsList.module.css'
import PTCoponet from './PtCoponet'
import PtOutput from './PtOutput'

function PostsList() {
    const [enteredBody, setEnteredBody] = useState('내용');
    const [enterName, setEnteredName] = useState('이름');
    const [input, setInput] = useState("");

    function bodyChangeHandler(event) {
        setEnteredBody(event.target.value);
    }

    function nameChangeHandler(event) {
        setEnteredName(event.target.value);
    }

    function ptagChangeHandler(event) {
        setInput(event.target.value)
    }
    return (
        <>
            <NewPost onBodyChange={bodyChangeHandler} onNameChange={nameChangeHandler} />
            <ul className={styles.posts}>
                <Post author={enterName} body={enteredBody} />
                <Post author="Manuel" body="nice centence" />
            </ul>
            {/* <p>
                <PTCoponet ptagChange={ptagChangeHandler} />
                <PtOutput output={input} />
            </p> */}
        </>
    );
}

export default PostsList;