import sprite from "../../Image/Icons.svg";
import { RiRadioLine } from "react-icons/ri";
import { FaHandHoldingWater } from "react-icons/fa";
import { CgSmartHomeRefrigerator } from "react-icons/cg";
import { LuMicrowave } from "react-icons/lu";
// import {
//   selectorTransmission,
//   selectorEngine,
//   selectorAC,
//   selectorBathroom,
//   selectorKitchen,
//   selectorTV,
//   selectorRadio,
//   selectorRefrigerator,
//   selectorMicrowave,
//   selectorGas,
//   selectorWater,
// } from "../../redux/vehicles/selectors.js";
import { useSelector } from "react-redux";
import css from "./Characteristics.module.css";

export default function Characteristics({ elem }) {
    const {
      transmission,
      engine,
      AC,
      bathroom,
      kitchen,
      TV,
      radio,
      refrigerator,
      microwave,
      gas,
      water,
    } = elem;
  
    return (
      <div className={css.wrapper}>
        <div className={css.characteristicItem}>
          <svg className={css.icon}>
            <use href={sprite + "#icon-fuel-pump"} />
          </svg>
          <p className={css.characteristicsText}>{engine}</p>
        </div>
        <div className={css.characteristicItem}>
          <svg className={css.icon}>
            <use href={sprite + "#icon-diagram"} />
          </svg>
          <p className={css.characteristicsText}>{transmission}</p>
        </div>
        {AC && (
          <div className={css.characteristicItem}>
            <svg className={css.icon}>
              <use href={sprite + "#icon-wind"} />
            </svg>
            <p className={css.characteristicsText}>AC</p>
          </div>
        )}
        {bathroom && (
          <div className={css.characteristicItem}>
            <svg className={css.icon}>
              <use href={sprite + "#icon-bi_droplet"} />
            </svg>
            <p className={css.characteristicsText}>Bathroom</p>
          </div>
        )}
        {kitchen && (
          <div className={css.characteristicItem}>
            <svg className={css.icon}>
              <use href={sprite + "#icon-cup-hot"} />
            </svg>
            <p className={css.characteristicsText}>Kitchen</p>
          </div>
        )}
        {TV && (
          <div className={css.characteristicItem}>
            <svg className={css.icon}>
              <use href={sprite + "#icon-tv"} />
            </svg>
            <p className={css.characteristicsText}>TV</p>
          </div>
        )}
        {radio && (
          <div className={css.characteristicItem}>
            <RiRadioLine className={css.icon} />
            <p className={css.characteristicsText}>Radio</p>
          </div>
        )}
        {refrigerator && (
          <div className={css.characteristicItem}>
            <CgSmartHomeRefrigerator className={css.icon} />
            <p className={css.characteristicsText}>Refrigerator</p>
          </div>
        )}
        {microwave && (
          <div className={css.characteristicItem}>
            <LuMicrowave className={css.icon} />
            <p className={css.characteristicsText}>Microwave</p>
          </div>
        )}
        {gas && (
          <div className={css.characteristicItem}>
            <svg className={css.icon}>
              <use href={sprite + "#icon-fuel-pump"} />
            </svg>
            <p className={css.characteristicsText}>Gas</p>
          </div>
        )}
        {water && (
          <div className={css.characteristicItem}>
            <FaHandHoldingWater className={css.icon} />
            <p className={css.characteristicsText}>Water</p>
          </div>
        )}
      </div>
    );
  }
  
