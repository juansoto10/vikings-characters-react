import './App.css';
import Character from './components/Character';

function App() {
  return (
    <div className='App'>
      <main className='main-container'>
        <h1>Vikings Characters</h1>
        <Character
          name='Ragnar Lothbrok'
          image='ragnar'
          features='Viking Warrior, King, farmer'
          description='Ragnar "Lothbrok" Sigurdsson (Old Norse: Ragnarr Loðbrók, Ragnar means "keeper of the fort" and Lothbrok means "shaggy breeches") is a Viking farmer and warrior who yearns to raid the rumored riches of undiscovered England. His first wife is Lagertha, and they have two children named Gyda and Björn. His second wife is Aslaug, and they have four sons named Ubbe, Hvitserk, Sigurd, and Ivar. Ragnar is the younger brother of Rollo. He becomes King of Kattegat, in southern Norway.'
        />
        <Character
          name='Lagertha'
          image='lagertha'
          features='Shieldmaiden, Queen, farmer'
          description="Lagertha (also spelt Lathgertha or Ladgerda) is a legendary Viking shieldmaiden known from Saxo Grammaticus early 13th-century CE Gesta Danorum. In this work, written in Latin and concerning Danish history, she is the first wife of Ragnar Lothbrok, a legendary Viking king said to have lived during the 9th century CE. In the TV show she becomes queen of Kattegat after defeating the forces of Aslaug, Ragnar's second wife, who ruled the area at the time."
        />
        <Character
          name='Ivar the Boneless'
          image='ivar'
          features='Viking Warrior, King, possible berserker'
          description="Ivar the Boneless (Old Norse: Ívarr hinn Beinlausi; died c. 873), was a semi-legendary Viking leader who invaded England and Ireland. He was the son of Ragnar Loðbrok and his wife Aslaug.
          According to the Tale of Ragnar Lodbrok, Ivar's bonelessness was the result of a curse. His mother, Aslaug, Ragnar's third wife was described as a völva, a seer or clairvoyant. Aslaug suggested that she and her husband wait for three nights before consummating their marriage after a long separation while he was in England raiding. However, Ragnar was passionate after such a long separation and did not heed her words. As a result, Ivar was born with weak bones."
        />
        <Character
          name='Rollo'
          image='rollo'
          features='Viking Warrior, Duke of Normandy'
          description="Rollo (l. c.860-c.930 CE, r. 911-927 CE) was a Viking chieftain who became the founder and first ruler of the region of Normandy. He was Ragnar's brother. A ruthless and skilled warrior, but his life in his brother's shadow makes Rollo's feelings towards Ragnar change from love and admiration to hateful jealousy. He converted to Christianity as part of a deal with the Frankish king Charles the Simple (893-923 CE) in 911 CE (changing his name to Robert) and his story was then embellished upon by later Christian writers who held him up as a role model: a savage Viking chief who became a paragon of Christian virtue and established law in the land."
        />
      </main>
    </div>
  );
}

export default App;
