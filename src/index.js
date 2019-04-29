import React from 'react';
import ReactDOM from 'react-dom';
import Comment from './components/Comment';
import ApprovalCard from './components/ApprovalCard';
import faker from 'faker';

const App = () => {
    const name = faker.name.findName();
    const date = faker.date.recent().toString();
    const sentences = faker.lorem.sentences();
    return(
        <ApprovalCard>
            <div className = "container ui comments">
                <ApprovalCard>
                    <ApprovalCard>
                        <Comment faker={faker} name={name} date={date} sentences={sentences} />
                    </ ApprovalCard>

                    <ApprovalCard>
                        <Comment faker={faker} name="Tusher" date={date} sentences="Fuck You" />
                    </ApprovalCard>

                    <ApprovalCard>
                        <Comment faker={faker} name={name} date={date} sentences={sentences} />
                    </ ApprovalCard>
                </ApprovalCard>
            </div>
        </ApprovalCard>
    );
};

ReactDOM.render(<App />, document.getElementById('root'));
