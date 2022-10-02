import {useState, useEffect} from 'react';
import './App.css';
import Avatar from './components/Avatar';
import PartList from './components/PartList';

const total = {
    body: 17,
    eyes:17,
    hair:73,
    mouth: 24,
    eyebrows:15,
    glasses:17,
    clothing1:5,
    clothing2:5,
    clothing3:9,
};

function App() {

  const [body, setBody] = useState(0);
  const [eyes, setEyes] = useState(2);
  const [eyebrows, setEyeBrow] = useState(2);
  const [hair, setHair] = useState(0);
  const [clothing1, setClothing1] = useState(0);
  const [clothing2, setClothing2] = useState(0);
  const [clothing3, setClothing3] = useState(0);
  const [mouth, setMouth] = useState(2);
  const [glasses, setGlasses] = useState(2);
  const randomize =() => {
      setBody(Math.floor(Math.random()* total.body));
      setEyes(Math.floor(Math.random()* total.eyes));
      setEyeBrow(Math.floor(Math.random()* total.eyebrows));
      setHair(Math.floor(Math.random()* total.hair));
      setMouth(Math.floor(Math.random()* total.mouth));
      setGlasses(Math.floor(Math.random()* total.glasses));
      setClothing1(Math.floor(Math.random()* total.clothing1));
      setClothing2(Math.floor(Math.random()* total.clothing2));
      setClothing3(Math.floor(Math.random()* total.clothing3));
  };
  // useEffect
  useEffect(()=>{
    randomize();
  },[]);

  return (
    
    <div className="App">
      <div className="title">CHARACTER</div>
      <div className="subtitle">💄 CUSTOMIZATION 👔 </div>
      <div className="lets"> Craft your avatar !!!</div>
     <br></br>
      <div className="avatar-group">
        <div>
          <div className="avatar-wrapper">
            <Avatar
            body={body} 
            eyes={eyes} 
            hair={hair} 
            clothing1={clothing1} 
            clothing2={clothing2} 
            clothing3={clothing3} 
            mouth={mouth} 
            eyebrow={eyebrows} 
            glasses={glasses}
            />
            <div className="btn-text">
              <button className="btn-avt" 
              onClick={()=> randomize()}>Randomize</button>

            </div>
          </div>
         
        </div>
     

      
      <div>
      {/* list body */}
          <div className="list-char">
          <h3 className="list-title">🛠 Body 🛠 </h3>
          <PartList 
          total={total.body} 
          path="body" 
          set={setBody} 
          selected={body}
          />
          </div>

      {/* list eyes */}
          <div className="list-char">
          <h3 className="list-title">🛠 Eyes 🛠 </h3>
          <PartList 
          total={total.eyes} 
          path="eyes" 
          set={setEyes} 
          selected={eyes}
          zoom={2.5}
          top="35px"
          />
          </div>

        {/* list hair */}
        <div className="list-char">
          <h3 className="list-title">🛠 Hair 🛠 </h3>
          <PartList 
          total={total.hair} 
          path="hair" 
          set={setHair} 
          selected={hair}
          />
          </div>
        {/* list mouth */}
        <div className="list-char">
          <h3 className="list-title">🛠 Mouth 🛠</h3>
          <PartList 
          total={total.mouth} 
          path="mouths" 
          set={setMouth} 
          selected={mouth}
          zoom={2}
          />
          </div>
        {/* list eyebrows */}
        <div className="list-char">
          <h3 className="list-title">🛠 Eyebrows 🛠 </h3>
          <PartList 
          total={total.eyebrows} 
          path="eyebrows" 
          set={setEyeBrow} 
          selected={eyebrows}
          />
          </div>
        {/* list glasses */}
        <div className="list-char">
          <h3 className="list-title">🛠 Glasses 🛠 </h3>
          <PartList 
          total={total.glasses} 
          path="accessories/glasses" 
          set={setGlasses} 
          selected={glasses}
          />
          </div>
        {/* list clothing 1 */}
        <div className="list-char">
          <h3 className="list-title">🛠 Clothing 1 🛠 </h3>
          <PartList 
          total={total.clothing1} 
          path="clothes/layer_1" 
          set={setClothing1} 
          selected={clothing1}
          />
          </div>
        {/* list clothing 2 */}
        <div className="list-char">
          <h3 className="list-title">🛠 Clothing 2 🛠 </h3>
          <PartList 
          total={total.clothing2} 
          path="clothes/layer_2" 
          set={setClothing2} 
          selected={clothing2}
          />
          </div>
        {/* list clothing 3 */}
        <div className="list-char">
          <h3 className="list-title">🛠 Clothing 3 🛠 </h3>
          <PartList 
          total={total.clothing3} 
          path="clothes/layer_3" 
          set={setClothing3} 
          selected={clothing3}
          />
          </div>

    </div>
    </div>
    </div>
   
  );
}

export default App;
