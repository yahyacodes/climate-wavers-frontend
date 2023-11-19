import Postcomponent from './Postcomponent';
import TweetGenerator from './TweetGenerator';

const Education = () => {
    return (
        <div className='text-2xl text-center pt-1 md:pt-5 '>
            <h2 className='border-b-2 pb-1 md:pb-3 text-lg md:text-xl font-semibold '>Education</h2>
			<TweetGenerator />
            <Postcomponent category="education"/>
        </div>
      )
}

export default Education