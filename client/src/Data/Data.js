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
    axaliGamoshveba[i].push(
      gamoshvebisMult[i].Soflis,
      gamoshvebisMult[i].Samto,
      gamoshvebisMult[i].Damamushavebeli,
      gamoshvebisMult[i].Eleqtroenergiis,
      gamoshvebisMult[i].Wyalbobarageba,
      gamoshvebisMult[i].Mshenebloba,
      gamoshvebisMult[i].Sabitumo,
      gamoshvebisMult[i].Transporti,
      gamoshvebisMult[i].Gantavsebis,
      gamoshvebisMult[i].Informacia,
      gamoshvebisMult[i].Safinanso,
      gamoshvebisMult[i].UdzraviQoneba,
      gamoshvebisMult[i].Profesiuli,
      gamoshvebisMult[i].Administraciuli,
      gamoshvebisMult[i].Saxelmwifo,
      gamoshvebisMult[i].Ganatleba,
      gamoshvebisMult[i].Jandacva,
      gamoshvebisMult[i].Xelovneba,
      gamoshvebisMult[i].Sxva,
      gamoshvebisMult[i].Shinameurneoba
    );
  }

  const sabolooMoxmareba = [];
  mimdinareGirebuleba.map((item) =>
    sabolooMoxmareba.push(item.SabolooMoxmareba * 1)
  );
  //dzveli gamoshveba
  const sabolooGamoshveba = [];
  mimdinareGirebuleba.map((item) =>
    sabolooGamoshveba.push(item.Gamoshveba * 1)
  );

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
        sabolooGamoshveba={sabolooGamoshveba}
        mimdinareGirebuleba={mimdinareGirebuleba}
        axaliGamoshveba={axaliGamoshveba}
      />
      <p></p>
    </div>
  );
}
export default Data;
