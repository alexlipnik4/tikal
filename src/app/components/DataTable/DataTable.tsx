import React from 'react';
import { isolationSorter } from '../../lib/isolationSorter'
import { agentsData } from '../../common/mocks/agentsData';
import './DataTable.scss';
import {Typography} from '@rmwc/typography';

const DataTable = () => {
    console.log(isolationSorter())
    return (
        <div>

            <table className="data-table">
                <tr className="data-table__header">
                    {Object.keys(agentsData[0]).map((missionKey: string, index: number) => (
                        <th key={`${missionKey}_header`}>
                            <Typography use="body2">{`${missionKey.charAt(0).toUpperCase() + missionKey.slice(1)} ${index === 0 ? 'ID' : ''}`}</Typography>
                        </th>
                    ))}
                </tr>

                {agentsData.map((mission: any, index: number) => (
                    <tr key={`${mission}__${index}`} className="data-table__body-row">
                        {Object.keys(agentsData[0]).map((missionKey: string) => (
                            <td key={`${missionKey}_header`}>
                                <Typography use="body2">{mission[`${missionKey}`]}</Typography>
                            </td>
                        ))}
                    </tr>  
                ))}
                
                <tfoot>
                    <td />
                    <td />
                    <td />
                    <td className="data-table__footer">
                        <Typography use="body2">{`${agentsData.length} missions`}</Typography>
                    </td>
                </tfoot>
                
            </table>
        </div>
    )
}

export default DataTable;