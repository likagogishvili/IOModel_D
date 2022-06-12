import MainPage from "../MainPage/MainPage";
import Axios from "axios";
import { useEffect, useState } from "react";

function Data() {
  const [gamoshvebisMult, SetGamoshvebisMult] = useState([]);
  const [damatebuliMult, SetDamatebuliMult] = useState([]);
  const [dasaqmebisMult, SetDasaqmebisMult] = useState([]);
  const [importisMult, SetImportisMult] = useState([]);
  const [dziritadiKapitaliMult, SetDziritadiKapitaliMult] = useState([]);
  const [shromisAnazgaureba, SetShromisAnazgaureba] = useState([]);
  const [mtlianiMultipikatorebi, SetMtlianiMultipikatorebi] = useState([]);
  const [mimdinareGirebuleba, SetMimdinareGirebuleba] = useState([]);


  //axali gamoshvebis multiplikatoris matricis sheqmna
  const axaliGamoshvebasoflis = [];
  const axaliGamoshvebaSamto = [];
  const axaliDamamushavebeli = [];
  const axaliEleqtroenergiis = [];
  const axaliWyalbobarageba = [];
  const axaliMshenebloba = [];
  const axaliSabitumo = [];
  const axaliTransporti = [];
  const axaliGantavsebis = [];
  const axaliInformacia = [];
  const axaliSafinanso = [];
  const axaliUdzraviQoneba = [];
  const axaliProfesiuli = [];
  const axaliAdministraciuli = [];
  const axaliSaxelmwifo = [];
  const axaliGanatleba = [];
  const axaliJandacva = [];
  const axaliXelovneba = [];
  const axaliSxva = [];
  const axaliShinameurneoba = [];
  const axaliGamoshveba = [
    axaliGamoshvebasoflis,
    axaliGamoshvebaSamto,
    axaliDamamushavebeli,
    axaliEleqtroenergiis,
    axaliWyalbobarageba,
    axaliMshenebloba,
    axaliSabitumo,
    axaliTransporti,
    axaliGantavsebis,
    axaliInformacia,
    axaliSafinanso,
    axaliUdzraviQoneba,
    axaliProfesiuli,
    axaliAdministraciuli,
    axaliSaxelmwifo,
    axaliGanatleba,
    axaliJandacva,
    axaliXelovneba,
    axaliSxva,
    axaliShinameurneoba,
  ];
  for (let i = 0; i < gamoshvebisMult.length; i++) {
    axaliGamoshvebasoflis.push(gamoshvebisMult[i].Soflis);
    axaliGamoshvebaSamto.push(gamoshvebisMult[i].Samto);
    axaliDamamushavebeli.push(gamoshvebisMult[i].Damamushavebeli);
    axaliEleqtroenergiis.push(gamoshvebisMult[i].Eleqtroenergiis);
    axaliWyalbobarageba.push(gamoshvebisMult[i].Wyalbobarageba);
    axaliMshenebloba.push(gamoshvebisMult[i].Mshenebloba);
    axaliSabitumo.push(gamoshvebisMult[i].Sabitumo);
    axaliTransporti.push(gamoshvebisMult[i].Transporti);
    axaliGantavsebis.push(gamoshvebisMult[i].Gantavsebis);
    axaliInformacia.push(gamoshvebisMult[i].Informacia);
    axaliSafinanso.push(gamoshvebisMult[i].Safinanso);
    axaliUdzraviQoneba.push(gamoshvebisMult[i].UdzraviQoneba);
    axaliProfesiuli.push(gamoshvebisMult[i].Profesiuli);
    axaliAdministraciuli.push(gamoshvebisMult[i].Administraciuli);
    axaliSaxelmwifo.push(gamoshvebisMult[i].Saxelmwifo);
    axaliGanatleba.push(gamoshvebisMult[i].Ganatleba);
    axaliJandacva.push(gamoshvebisMult[i].Jandacva);
    axaliXelovneba.push(gamoshvebisMult[i].Xelovneba);
    axaliSxva.push(gamoshvebisMult[i].Sxva);
    axaliShinameurneoba.push(gamoshvebisMult[i].Shinameurneoba);
  }



  //dzveli SabolooMoxmareba
  const sabolooMoxmareba = [];
  mimdinareGirebuleba.map((item) =>
    sabolooMoxmareba.push(item.SabolooMoxmareba * 1)
  );
  //dzveli gamoshveba
  const sabolooGamoshveba = []
  mimdinareGirebuleba.map((item) =>
  sabolooGamoshveba.push(item.Gamoshveba)
);


  useEffect(() => {
    Axios.get("http://localhost:4000/GamoshvebisMult").then((response) => {
      const data = response.data;
      SetGamoshvebisMult(data);
    });
  }, []);

  console.log(axaliGamoshveba)
  

  useEffect(() => {
    Axios.get("http://localhost:4000/DamatebuliMult").then((response) => {
      const data = response.data;
      SetDamatebuliMult(data);
    });
  }, []);

  useEffect(() => {
    Axios.get("http://localhost:4000/DasaqmebisMult").then((response) => {
      const data = response.data;
      SetDasaqmebisMult(data);
    });
  }, []);

  useEffect(() => {
    Axios.get("http://localhost:4000/ImportisMult").then((response) => {
      const data = response.data;
      SetImportisMult(data);
    });
  }, []);

  useEffect(() => {
    Axios.get("http://localhost:4000/DziritadiKapitaliMult").then(
      (response) => {
        const data = response.data;
        SetDziritadiKapitaliMult(data);
      }
    );
  }, []);

  useEffect(() => {
    Axios.get("http://localhost:4000/ShromisAnazgaureba").then((response) => {
      const data = response.data;
      SetShromisAnazgaureba(data);
    });
  }, []);

  useEffect(() => {
    Axios.get("http://localhost:4000/MtlianiMultipikatorebi").then(
      (response) => {
        const data = response.data;
        SetMtlianiMultipikatorebi(data);
      }
    );
  }, []);

  useEffect(() => {
    Axios.get("http://localhost:4000/MimdinareGirebuleba").then((response) => {
      const data = response.data;
      SetMimdinareGirebuleba(data);
    });
  }, []);

  return (
    <div>
      <MainPage
        sabolooMoxmareba={sabolooMoxmareba}
        sabolooGamoshveba = {sabolooGamoshveba}
        mimdinareGirebuleba={mimdinareGirebuleba}
        axaliGamoshveba={axaliGamoshveba}
      />
      <p></p>
    </div>
  );
}
export default Data;
