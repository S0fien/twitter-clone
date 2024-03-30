import { useQuery } from '@apollo/client';
import { GET_TWEETS_QUERY } from '../app/graphql/queries';
import {FAKE_TWEETS} from "../constants/data";

// interface Product {
//     id: string;
//     name: string;
//     quantity: number;
// }
//
// interface GetProductsData {
//     getProducts: Product[];
// }

function Tweets() {
    const tweets = FAKE_TWEETS;

    // if (loading) return <p>Loading...</p>;
    // if (error) return <p>Error: {error.message}</p>;

    return (
        <div>
            <h3>Tweets</h3>
            <ul>
                {tweets.map(({ id, content, user }) => (
                    <li key={id}>
                        <p>{content} by {user.alias}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Tweets;
