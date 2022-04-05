/**
 * Copyright (c) 2022-present, Rana Jahanzaib
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React, {ChangeEvent, useState} from "react";
import "./table.css";

export interface ColumnsProps {
    name: string;
}


export interface TableProps {
    checkbox: boolean;
    columns: ColumnsProps[];
    rows: object[];
    primary?: boolean;

    backgroundColor?: string;

    size?: "small" | "medium" | "large";

    label: string;

    onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

/**
 * Primary component for the Button
 */
export const Table = ({checkbox = true, columns = [{name: 'Name'}, {name: 'Completed'}]}: TableProps) => {

    const [selected, setSelected] = useState<HTMLInputElement[]>([]);

    const checkboxClicked = ({currentTarget}: ChangeEvent<HTMLInputElement>) => {
        setSelected(currentTarget.checked
            ? [...selected].concat(currentTarget)
            : [...selected].filter(x => x !== currentTarget));
    }


    const selectAll = (e: ChangeEvent<HTMLInputElement>) => {
        const isChecked = e.currentTarget.checked;
        if (isChecked) {

        } else {

        }
    }

    return (
        <table className="styled-table">
            <thead>
            <tr>
                {checkbox && (
                    <th>
                        <input onChange={selectAll} type='checkbox'/>
                    </th>
                )}
                {columns.map((column, index) =>
                    (
                        <th key={index}>{column.name}</th>
                    )
                )}

            </tr>
            </thead>
            <tbody>
            <tr>
                {checkbox && (
                    <td>
                        <input onChange={checkboxClicked} type='checkbox'/>
                    </td>
                )}
                <td>Dom</td>
                <td>6000</td>
            </tr>
            <tr>
                {checkbox && (
                    <td>
                        <input onChange={checkboxClicked} type='checkbox'/>
                    </td>
                )}
                <td>Dom</td>
                <td>6000</td>
            </tr>
            <tr>
                {checkbox && (
                    <td>
                        <input onChange={checkboxClicked} type='checkbox'/>
                    </td>
                )}
                <td>Dom</td>
                <td>6000</td>
            </tr>

            <tfoot className='table-footer'>
            {/** items selected **/}
            <div className='selected-items'>
                {selected.length > 0 && <p>{selected.length} items selected</p>}
            </div>

            </tfoot>

            </tbody>
        </table>
    );
};

export default Table;
