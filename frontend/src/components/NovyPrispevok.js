import React from 'react'
import styled from "styled-components"
import TextareaAutosize from '@mui/base/TextareaAutosize';

import { useState, useEffect } from "react";
import {
  ref,
  uploadBytes,
  getDownloadURL,
  listAll,
  list,
} from "firebase/storage";
import { storage } from "./firebase";
import { v4 } from "uuid";



const PrispevokContainer = styled("div")`
    width: 100%;
    height: max-content;
    background-color: #ECF3FF;
    border-radius: 9px;
    max-width: 650px;
    margin: 0 auto;
    margin-bottom: 20px;
    display: flex;
    flex-direction: column;
    padding: 10px 20px;
    padding-bottom: 20px;
    
`
const ShareButton = styled("button")`
    padding: 4px 10px;
    width: max-content;
    gap: 8px;
    border: none;
    cursor: pointer;
    border-radius: 8px;
    font-size: 18px;
    background-color: #166fe5;
    font-weight: 500;
    margin-top: 10px;

    :hover{
      background-color: #3289fa;
    }

    @media (max-width: 435px) {
        margin-top: 0px;
  }
`

const InputButton = styled("label")`
    padding: 4px 10px;
    width: max-content;
    gap: 8px;
    border: none;
    cursor: pointer;
    border-radius: 8px;
    font-size: 18px;
    background-color: #bada55;
    font-weight: 500;
    margin-top: 10px;

    :hover{
      background-color: #a5c930;
    }
`

const CenterDiv = styled("div")`
    display: flex;
    flex-direction: column;
    align-items: center;
`

const FlexDivSubmitButtons = styled("div")`
    display: flex;
    gap: 8px;

    @media (max-width: 435px) {
    flex-direction: column;
    align-items: center;
  }
`

export default function NovyPrispevok(props) {
    const [prispevokText, setPrispevokText] = useState("");
    const [imageUpload, setImageUpload] = useState(null);
    const [imageUrls, setImageUrls] = useState([]);
    const [image, setImage] = useState(null)
        

    const handleInputChange = (e) => {
        const {id , value} = e.target;
        if(id === "standard-basic"){
            setPrispevokText(value);
            console.log(value)
        }
    }

    //-------------------------------------

    const imagesListRef = ref(storage, "imagesss/");

  const uploadFile = () => {
    if (imageUpload == null) return;

    const imageRef = ref(storage, `images/${imageUpload.name + v4()}`);
    uploadBytes(imageRef, imageUpload).then((snapshot) => {
      getDownloadURL(snapshot.ref).then((url) => {
        setImageUrls((prev) => [...prev, url]);
      });
    });
  };

  useEffect(() => {
    listAll(imagesListRef).then((response) => {
      response.items.forEach((item) => {
        getDownloadURL(item).then((url) => {
          setImageUrls((prev) => [...prev, url]);
        });
      });
    });
  }, []);
  //-------------------------------------

  const onImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
        setImageUpload(event.target.files[0])
        setImage(URL.createObjectURL(event.target.files[0]));
    }
   }

  return (
    <PrispevokContainer>
        <h2 style={{paddingBottom: "8px"}}>Pridajte nový príspevok:</h2>
        <TextareaAutosize style={{overflowWrap: "break-word", padding:"5px", border:"none",width:"100%", borderRadius:"8px",resize:"none", marginBottom:"8px"}} id="standard-basic" onChange={(e) => handleInputChange(e)} label="Čo máte na mysli? Nič?" variant="standard"  />

        <div>
            <input
            style={{display: "none"}}
                id="mediaInput"
                type="file"
                onChange={onImageChange}
            />
            
            <CenterDiv>
                {image ? <img style={{width:"100%", height:"100%", borderRadius:"8px"}} src={image} alt="preview image" /> : ""}
                <FlexDivSubmitButtons>
                    <InputButton for="mediaInput">Vyber fotografiu</InputButton>
                    <ShareButton onClick={uploadFile}> Zverejniť príspevok</ShareButton>                    
                </FlexDivSubmitButtons>

            </CenterDiv>
            {/* {imageUrls.map((url) => {
                return <img style={{width:"100%", height:"100%", borderRadius:"8px"}} src={url} />;
            })} */}
        </div>

    </PrispevokContainer>
  )
}