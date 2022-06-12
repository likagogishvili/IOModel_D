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

  const axaliGamoshveba = [
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
  ];

  for (let i = 0; i < gamoshvebisMult.length; i++) {
    axaliGamoshveba[0].push(gamoshvebisMult[i].Soflis);
    axaliGamoshveba[1].push(gamoshvebisMult[i].Samto);
    axaliGamoshveba[2].push(gamoshvebisMult[i].Damamushavebeli);
    axaliGamoshveba[3].push(gamoshvebisMult[i].Eleqtroenergiis);
    axaliGamoshveba[4].push(gamoshvebisMult[i].Wyalbobarageba);
    axaliGamoshveba[5].push(gamoshvebisMult[i].Mshenebloba);
    axaliGamoshveba[6].push(gamoshvebisMult[i].Sabitumo);
    axaliGamoshveba[7].push(gamoshvebisMult[i].Transporti);
    axaliGamoshveba[8].push(gamoshvebisMult[i].Gantavsebis);
    axaliGamoshveba[9].push(gamoshvebisMult[i].Informacia);
    axaliGamoshveba[10].push(gamoshvebisMult[i].Safinanso);
    axaliGamoshveba[11].push(gamoshvebisMult[i].UdzraviQoneba);
    axaliGamoshveba[12].push(gamoshvebisMult[i].Profesiuli);
    axaliGamoshveba[13].push(gamoshvebisMult[i].Administraciuli);
    axaliGamoshveba[14].push(gamoshvebisMult[i].Saxelmwifo);
    axaliGamoshveba[15].push(gamoshvebisMult[i].Ganatleba);
    axaliGamoshveba[16].push(gamoshvebisMult[i].Jandacva);
    axaliGamoshveba[17].push(gamoshvebisMult[i].Xelovneba);
    axaliGamoshveba[18].push(gamoshvebisMult[i].Sxva);
    axaliGamoshveba[19].push(gamoshvebisMult[i].Shinameurneoba);
  }

  console.log(axaliGamoshveba);

  //dzveli SabolooMoxmareba
  const sabolooMoxmareba = [];
  mimdinareGirebuleba.map((item) =>
    sabolooMoxmareba.push(item.SabolooMoxmareba * 1)
  );
  //dzveli gamoshveba
  const sabolooGamoshveba = [];
  mimdinareGirebuleba.map((item) => sabolooGamoshveba.push(item.Gamoshveba));

  useEffect(() => {
    Axios.get("http://localhost:4000/GamoshvebisMult").then((response) => {
      const data = response.data;
      SetGamoshvebisMult(data);
    });
  }, []);

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
