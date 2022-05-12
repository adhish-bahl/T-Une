  import React from 'react'

  function TrendingRow({data}) {

    console.log(data);
      
    return (
      <table border="1">
                  <tr>
                      <th>S. No.</th>
                      <th>Track Name</th>
                      <th>Artist</th>
                  </tr>
                  <tr>
                      <td>1</td>
                      <td>Honest (feat. Don Toliver)</td>
                      <td>Justin Bieber, Don Toliver</td>
                  </tr>
                  <tr>
                      <td>2</td>
                      <td>First Class</td>
                      <td>Jack Harlow</td>
                  </tr>
                  <tr>
                      <td>3</td>
                      <td>As It Was</td>
                      <td>Harry Styles</td>
                  </tr>
                  <tr>
                      <td>4</td>
                      <td>Bam Bam (feat. Ed Sheeran)</td>
                      <td>Camila Cabello, Ed Sheera</td>
                  </tr>
                  <tr>
                      <td>5</td>
                      <td>Heat Waves</td>
                      <td>Glass Animals</td>
                  </tr>
                  <tr>
                      <td>6</td>
                      <td>Thats what I want to say</td>
                      <td>Lil Nas X</td>
                  </tr>
                  <tr>
                      <td>7</td>
                      <td>Thousand Miles</td>
                      <td>The Kid LAROI</td>
                  </tr>
                  <tr>
                      <td>8</td>
                      <td>Ghost</td>
                      <td>Justin Bieber</td>
                  </tr>
                  <tr>
                      <td>9</td>
                      <td>Middle of the night</td>
                      <td>Elley Duhe</td>
                  </tr>
                  <tr>
                      <td>10</td>
                      <td>Women</td>
                      <td>Doja Cat</td>
                  </tr>
              </table>
    )
  }

  export default TrendingRow