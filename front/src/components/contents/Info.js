import React, { Component } from "react";
import "./Info.css";

export default class Info extends Component {
  render() {
    return (
      <div>
        <div className="infomain">
          <h1>A brief history of haikus</h1>
        </div>
        <div className="haikuinfo">
          <p>
            Haiku, unrhymed poetic form consisting of 17 syllables arranged in
            three lines of 5, 7, and 5 syllables respectively. The haiku first
            emerged in Japanese literature during the 17th century, as a terse
            reaction to elaborate poetic traditions, though it did not become
            known by the name haiku until the 19th century.
            <br></br>
            The term haiku is derived from the first element of the word haikai
            (a humorous form of renga, or linked-verse poem) and the second
            element of the word hokku (the initial stanza of a renga). <br></br>
            The hokku, which set the tone of a renga, had to mention in its
            three lines such subjects as the season, time of day, and the
            dominant features of the landscape, making it almost an independent
            poem.<br></br>
            The hokku (often interchangeably called haikai) became known as the
            haiku late in the 19th century, when it was entirely divested of its
            original function of opening a sequence of verse. <br></br>
            Today the term haiku is used to describe all poems that use the
            three-line 17-syllable structure, even the earlier hokku.
            Originally, the haiku form was restricted in subject matter to an
            objective description of nature suggestive of one of the seasons,
            evoking a definite, though unstated, emotional response. The form
            gained distinction early in the Tokugawa period (1603–1867) when the
            great master Bashō elevated the hokku to a highly refined and
            conscious art. He began writing what was considered this “new style”
            of poetry in the 1670s, while he was in Edo (now Tokyo). Among his
            earliest haiku is 
            On a withered branch 
            A crow has alighted;
            Nightfall in autumn. 
            
            Bashō subsequently traveled throughout Japan,
            and his experiences became the subject of his verse. His haiku were
            accessible to a wide cross section of Japanese society, and these
            poems’ broad appeal helped to establish the form as the most popular
            form in Japanese poetry. 
            After Bashō, and particularly after the haiku’s revitalization in the 19th
            century, its range of subjects expanded beyond nature. But the haiku
            remained an art of expressing much and suggesting more in the fewest
            possible words. Other outstanding haiku masters were Buson in the
            18th century, Issa in the late 18th and early 19th centuries,
            Masaoka Shiki in the later 19th century, and Takahama Kyoshi and
            Kawahigashi Hekigotō in the late 19th and early 20th centuries. At
            the turn of the 21st century there were said to be a million
            Japanese who composed haiku under the guidance of a teacher. A poem
            written in the haiku form or a modification of it in a language
            other than Japanese is also called a haiku. In English the haiku
            composed by the Imagists were especially influential during the
            early 20th century. The form’s popularity beyond Japan expanded
            significantly after World War II, and today haiku are written in a
            wide range of languages.
          </p>
        </div>
      </div>
    );
  }
}
