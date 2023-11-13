import React from "react";
import "./_index.scss";

import { EnumSortProperty, TSort } from "../../types";

export type TypeSortProps = {
  value: TSort;
  onChangeSortProperty: (idx: TSort) => void;
};

export type TypePopupClick = MouseEvent & {
  composedPath: Node[];
  path: Node[];
};

export type SortItem = {
  name: string;
  sortProperty: EnumSortProperty;
};

export const sortList: TSort[] = [
  { name: "убыванию цены ↓", sortProperty: EnumSortProperty.PRICE_DESC },
  { name: "возрастанию цены ↑", sortProperty: EnumSortProperty.PRICE_ASC },
];

export const Sort: React.FC<TypeSortProps> = ({
  value,
  onChangeSortProperty,
}) => {
  const [isHiddenPopup, setisHiddenPopup] = React.useState(true);

  const sortRef = React.useRef<HTMLDivElement>(null);

  const onClickSortItem = (obj: TSort) => {
    onChangeSortProperty(obj);
    setisHiddenPopup(true);
  };

  React.useEffect(() => {
    const handleClickOutsideSort = (event: MouseEvent) => {
      const _event = event as TypePopupClick;
      const eventPath = _event.composedPath
        ? _event.composedPath()
        : _event.path;

      if (sortRef.current && !eventPath.includes(sortRef.current)) {
        setisHiddenPopup(true);
      }
    };

    document.body.addEventListener("click", handleClickOutsideSort);

    return () =>
      document.body.removeEventListener("click", handleClickOutsideSort);
  }, []);

  return (
    <div className="sort__line" ref={sortRef}>
      <div className="sort__text">Сортировка по</div>
      <div className="sort__Properties" onClick={() => setisHiddenPopup(false)}>
        {value.name}
      </div>
      <div className="sort__popup" hidden={isHiddenPopup}>
        <ul>
          {sortList.map((propertyObj, index) => (
            <li
              onClick={() => onClickSortItem(propertyObj)}
              key={index}
              className={
                value.sortProperty === propertyObj.sortProperty ? "active" : ""
              }
            >
              {propertyObj.name}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
