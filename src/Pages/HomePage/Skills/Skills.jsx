import React from 'react';

const SKills = () => {
    return (
        <div>
            <div className='my-10'>
                <h2 className="text-center text-secondary text-4xl font-bold my-2">My SKills</h2>
                <p className='text-center text-xl font-semibold'>Skills on Web Development!</p>
            </div>
            <div className='flex justify-between items-center mx-20'>
                <ul className="steps steps-vertical">

                    <li className="step step-secondary"><div>
                        HTML <input type="range" min="0" max="100" value="90" className="range range-primary" step="5" />
                        90%
                    </div></li>
                    <li className="step step-secondary"><div>
                        CSS <input type="range" min="0" max="100" value="75" className="range range-primary" step="5" />
                        75%
                    </div></li>
                    <li className="step step-secondary"><div>
                        Bootstrap <input type="range" min="0" max="100" value="75" className="range range-primary" step="5" />
                        75%
                    </div></li>
                    <li className="step step-secondary"><div>
                        TailwindCSS <input type="range" min="0" max="100" value="85" className="range range-primary" step="5" />
                        80%
                    </div></li>
                    <li className="step step-secondary"><div>
                        WordPress <input type="range" min="0" max="100" value="85" className="range range-primary" step="5" />
                        85%
                    </div></li>
                </ul>
                <ul className="steps steps-vertical">

                    <li className="step step-secondary"><div>
                        JavaScript <input type="range" min="0" max="100" value="80" className="range range-primary" step="5" />
                        80%
                    </div></li>
                    <li className="step step-secondary"><div>
                        ReactJS <input type="range" min="0" max="100" value="85" className="range range-primary" step="5" />
                        85%
                    </div></li>
                    <li className="step step-secondary"><div>
                        NodeJS <input type="range" min="0" max="100" value="55" className="range range-primary" step="5" />
                        55%
                    </div></li>
                    <li className="step step-secondary"><div>
                        ExpressJS <input type="range" min="0" max="100" value="55" className="range range-primary" step="5" />
                        55%
                    </div></li>
                    <li className="step step-secondary"><div>
                        MongoDB <input type="range" min="0" max="100" value="75" className="range range-primary" step="5" />
                        70%
                    </div></li>
                </ul>
            </div>
        </div>
    );
};

export default SKills;