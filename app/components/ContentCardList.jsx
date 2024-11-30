import React from 'react'
import temizenerji from "../assets/temizenerji.png";
import kaliteliurun from "../assets/kaliteliurun.png";
import akilliteknoloji from "../assets/akilliteknoloji.png";
import uatecrube from "../assets/uatecrube.png";
import ContentCard from './ContentCard';
function ContentCardList() {
  return (
    <>
      <ContentCard img={temizenerji} title='Temiz Enerji'/>
      <ContentCard img={kaliteliurun} title='Enerji Verimliliği'/>
      <ContentCard img={akilliteknoloji} title='Akıllı Teknoloji'/>
      <ContentCard img={uatecrube} title='Uluslararası Tecrübe'/>
    </>
  )
}

export default ContentCardList
