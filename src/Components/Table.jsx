import React, { useContext } from 'react'
import MultiStepContext from '../StepContext'

function Table() {
    const { finalData } = useContext(MultiStepContext)
    return (
        <div className='container'>
            {
                !finalData ?
                    ""
                    :
                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Firstname</th>
                                <th scope="col">Lastname</th>
                                <th scope="col">Email</th>
                                <th scope="col">Education</th>
                                <th scope="col">Degree</th>
                                <th scope="col">Univercity</th>
                                <th scope="col">Profession</th>
                                <th scope="col">Job</th>
                                <th scope="col">Workplace</th>

                            </tr>
                        </thead>
                        <tbody>
                            {
                                finalData.map((item, index) => (
                                    <tr key={index}>
                                        <td>{index+1}</td>
                                        <td>{item.firstname}</td>
                                        <td>{item.lastname}</td>
                                        <td>{item.email}</td>
                                        <td>{item.education}</td>
                                        <td>{item.degree}</td>
                                        <td>{item.univercity}</td>
                                        <td>{item.profession}</td>
                                        <td>{item.job}</td>
                                        <td>{item.workplace}</td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
            }
        </div>
    )
}

export default Table