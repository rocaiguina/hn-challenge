import React, { Component } from 'react';
import './App.css';
import 'font-awesome/css/font-awesome.min.css';

class App extends Component {
  render() {
    return (
      <div className="container">
        <header className="header">
            <div>
              <span>
                <i className="fa fa-angle-left"></i>
              </span>
            </div>
            <div className="header__icons--right">
              <span className="padding-1h">
                <i className="fa fa-share-square-o"></i>
              </span>
              <span className="padding-1h">
                <i className="fa fa-newspaper-o"></i>
              </span>
              <span className="padding-1h">
                <i className="fa fa-ellipsis-v"></i>
              </span>
            </div>
        </header>
        <div className="story">
          <div className="story__header">
            <h1 className="story__title">Stop whining and start hiring remote workers</h1>
            <div className="story__metadata margin-1v">
              <span className="padding-1h dark-orange-bg">481</span>
              <span className="padding-1h">jodosha</span>
              <span className="padding-1h">2 hrs</span>
              <span className="padding-1h"><i className="fa fa-fw fa-comment-o"></i>22</span>
            </div>
            <div className="story__links margin-1v">
              <span className="truncate"><i className="fa fa-fw fa-external-link"></i>http://37signals.com/svn/posts/3064-stop-whining-and-start-hiring-remote-workers</span>
            </div>
          </div>
          <div className="story__comments">
            <div className="comment padding-1h">
              <div className="comment__metadata">
                <span className="orange"><i className="fa fa-fw fa-user"></i>DanielBMarkham</span>
                <span className="padding-1h"><i className="fa fa-fw fa-hourglass-o"></i>1 hr</span>
              </div>
              <p className="padding-1h">{"Okey dokey. I clicked on this thinking \"hell yeah!\" and stopped short of agreeing after reading it. Why? Because although I agree with the author, his argument is too shallow.<p>Here's the thing: <i>delegating to remote workers is going to be the critical skill of the first part of the 21st century, and it's not as simple as black and white.</i><p>So it's not just \"do it all the time\" or \"only use local help\" It's much, much, much more complicated. I work with a lot of technology companies, and I've seen them kill perfectly good projects by poorly-configured remote worker configurations. If you don't know what you're doing, you're better off with 4 guys working in the same room than 40 guys working all over the world. See \"The Mythical Man-Month\" (<a href=\"http://www.hn-books.com/Books/The-Mythical-Man-Month.htm\" rel=\"nofollow\">http://www.hn-books.com/Books/The-Mythical-Man-Month.htm</a>) Technology labor is not fungible. The social dynamics of teams physically co-located can create powerful momentum. Serendipity is about 20 times harder to do over a telephone.<p>\"Get up to speed on remote working practices\" contains a lot of nuance. For instance, I've seen teams fly in remote workers for the first few sprints of a project, then going \"truly remote\" once the rhythm and cadence was established. I've seen teams pair up with each pair working in a different location. I've seen teams work mirror configurations where they still paired up, but each pair was separated. Each of these setups (and many more) have their advantages and disadvantages.<p>So yes, by all means, leverage the terrific talent and resources available to you around the world. But don't read a slogan and go running out to shoot your foot off. Take some time and figure out what kind of company you are, what kind of culture you have, and what kinds of projects you do. Then grow and evolve your remote working to fit in with that. Don't be the guy who already has the solution and is just looking for the problem. Remote working is the key to the new century, but it's nowhere as simple as flipping a light switch."}</p>
              <div className="comment__reply">
                <div className="comment__metadata padding-1h">
                  <span className="orange"><i className="fa fa-fw fa-user"></i>equalarrow</span>
                  <span className="padding-1h"><i className="fa fa-fw fa-hourglass-o"></i>1 hr</span>
                </div>
                <p className="padding-1h">{"I love the 37Signals guys and opinions, but this is where I greatly differ with them.<p>Case in point. I worked at a place where at one point, everyone was remote but me. I could have been remote, and sometimes I like working from home or a cafe or wherever. But for team morale and even with phone or video conversations with the other devs, it became totally demotivating after a while.<p>I was contracting with that company and joined years later as a ft employee. Engineering consisted of about half a dozen and we were growing. We started to notice that it was 'hard' to hire anyone local, so they just gave up (accepted maybe?) and ended up going with a contracting company and almost doubled the team with everyone new being offsite. Standups became something that was no longer fun because there was so much emphasis on looping in the remote people - screwing around with the video camera, trying out this video service, etc, etc. Come tomorrow (1/12), everyone at that place will be remote and they'll have lost pretty much all of the local devs for various reasons, me included.<p>Building a team can be hard. But I don't buy the \"we can't find anyone local\" argument and if I was building a team, I want people local. It's definitely a programmers market right now, but if you want to hire local, then you have to go out and get creative - go to user groups, meetings, etc. It can be done and I've seen it both ways. Local, to me, is just hard to beat. I want people engaged with each other and don't want to have to Google+ someone on video every time I have a question for them.<p>That said, I'm fine with some days a week where local people work remotely, but to have everyone or some 100% remote is not a good idea in my mind. You don't develop 'company culture' that way. If everyone's remote, there's no one to have a beer with after work and talk about the latest coding issue, problem, point of interest, socialize, or whatever. Guess that's just the difference with getting the work done vs. enjoying your work and the people you work with."}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
